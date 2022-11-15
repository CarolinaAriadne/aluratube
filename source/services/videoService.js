import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://scluydijfnbqbmyfmmub.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjbHV5ZGlqZm5icWJteWZtbXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0Njk2NzEsImV4cCI6MTk4NDA0NTY3MX0.oQUrX7Le62nKnJEDsz7wIr9QwjImmn3GOxBZcA3_8nM";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase
        .from("video")
        .select("*")
        
    }
  };
};
