<script>
  import { supabase } from "../lib/supabase";
  import Header from "../lib/components/Header.svelte";

  import "../styles/style.css";
</script>

<Header />
<main>
  <slot />
</main>
