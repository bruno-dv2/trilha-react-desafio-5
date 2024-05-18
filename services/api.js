import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jnyyflbzdiuhxgreeojf.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXlmbGJ6ZGl1aHhncmVlb2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5ODQxMjgsImV4cCI6MjAzMTU2MDEyOH0.fQR8CZqGcSr9a1fjr3-31nGUTZwhH4W5kEGczroJ7VY',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXlmbGJ6ZGl1aHhncmVlb2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5ODQxMjgsImV4cCI6MjAzMTU2MDEyOH0.fQR8CZqGcSr9a1fjr3-31nGUTZwhH4W5kEGczroJ7VY',
  },
});
