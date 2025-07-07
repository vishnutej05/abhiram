import { useState, useEffect, useCallback } from 'react';
import { getCSVUrl, isConfigured, GOOGLE_SHEETS_CONFIG } from '../config/googleSheets';

export interface InstagramPost {
  id: string;
  imageUrl: string;
  postUrl: string;
  caption: string;
  likes: string;
  type: string;
  altText: string;
  timestamp: string;
}

export const useInstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Parse CSV data from Google Sheets
  const parseCSV = (csvText: string): InstagramPost[] => {
    const lines = csvText.split('\n').filter(line => line.trim());
    
    if (lines.length < 2) {
      throw new Error('CSV must have at least a header row and one data row');
    }
    
    const posts: InstagramPost[] = [];
    
    // Skip header row (index 0)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Handle CSV parsing with quoted fields
      const values = line.split(',').map(val => val.replace(/^"(.*)"$/, '$1').trim());
      
      if (values.length >= 8) {
        // Only add posts with valid image URLs
        const imageUrl = values[1];
        if (imageUrl && imageUrl !== 'PASTE_IMAGE_URL_HERE' && imageUrl !== '') {
          posts.push({
            id: values[0] || `post_${i}`,
            imageUrl: imageUrl,
            postUrl: values[2] || '',
            caption: values[3] || '',
            likes: values[4] || '0',
            type: values[5] || 'image',
            altText: values[6] || '',
            timestamp: values[7] || new Date().toISOString()
          });
        }
      }
    }
    
    return posts;
  };

  const fetchPosts = useCallback(async () => {
    if (!isConfigured()) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const csvUrl = getCSVUrl();
      
      // Use a simpler fetch without custom headers that might cause CORS issues
      const response = await fetch(csvUrl);
      
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Google Sheet not accessible. Please check: 1) Sheet is public 2) Sheet name is exactly "Instagram Posts" 3) Sheet has data');
        } else if (response.status === 403) {
          throw new Error('Google Sheet access denied. Please set sharing to "Anyone with link can view"');
        } else if (response.status === 404) {
          throw new Error('Google Sheet not found. Please check the spreadsheet ID');
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      }
      
      const csvText = await response.text();
      
      // Check if we got actual CSV data
      if (!csvText || csvText.trim().length === 0) {
        throw new Error('Empty response from Google Sheets');
      }
      
      // For Google Sheets gviz API, the format might be slightly different
      // Check for various header formats
      const hasValidHeaders = csvText.includes('ID') && 
                             (csvText.includes('Image URL') || csvText.includes('imageUrl')) &&
                             (csvText.includes('Post URL') || csvText.includes('postUrl'));
      
      if (!hasValidHeaders) {
        console.log('CSV Response:', csvText.substring(0, 200));
        throw new Error('Invalid CSV format. Make sure your sheet has the correct headers and data. Check console for CSV content.');
      }
      
      const parsedPosts = parseCSV(csvText);
      
      if (parsedPosts.length === 0) {
        throw new Error('No valid posts found in Google Sheets. Make sure you have posts with real image URLs (not placeholder text)');
      }
      
      setPosts(parsedPosts);
      setLastUpdated(new Date().toISOString());
      setError(null);
      console.log(`✅ Successfully loaded ${parsedPosts.length} posts from Google Sheets`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch posts';
      setError(errorMessage);
      console.error('Error fetching Instagram posts:', err);
      console.error('CSV URL:', getCSVUrl());
      console.error('💡 To fix: 1) Make sheet public 2) Add real Instagram data via Google Apps Script 3) Run addPostsToSheet()');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshPosts = useCallback(async () => {
    await fetchPosts();
  }, [fetchPosts]);

  // Debug function to test Google Sheets connection
  const debugGoogleSheets = useCallback(async () => {
    console.log('🔍 Debug: Testing Google Sheets connection...');
    console.log('📊 Sheet ID:', GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID);
    console.log('🔗 CSV URL:', getCSVUrl());
    
    try {
      const response = await fetch(getCSVUrl());
      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', [...response.headers.entries()]);
      
      const text = await response.text();
      console.log('📄 Response text (first 500 chars):', text.substring(0, 500));
      
      return text;
    } catch (err) {
      console.error('❌ Debug error:', err);
      throw err;
    }
  }, []);

  // Expose debug function globally for testing
  useEffect(() => {
    (window as typeof window & { debugGoogleSheets: typeof debugGoogleSheets }).debugGoogleSheets = debugGoogleSheets;
  }, [debugGoogleSheets]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    lastUpdated,
    refreshPosts,
    isConfigured: isConfigured()
  };
};