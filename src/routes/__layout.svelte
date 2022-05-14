<script>
  import { supabase } from "../supabase";
  import Header from "../lib/components/Header.svelte";

  import "../styles/style.css";
</script>

<Header />
<main>
  <slot />
</main>
