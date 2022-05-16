<script>
  import { supabase } from '../../supabase'
  import { user } from '../stores/store'
  import { goto } from '$app/navigation'

  user.set(supabase.auth.user())

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user)
  })

  const logout = () => {
    console.log('Successfully Logged Out')
    supabase.auth.signOut()
    goto('/Login')
  }
</script>

<nav class="px-4 py-2.5 bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
      <h1
        class="self-center text-xl font-semibold whitespace-nowrap text-white"
      >
        FitnessTracker
      </h1>
    </a>
    <ul class="flex text-white">
      <li class="p-2">
        <a href="/">Home</a>
      </li>
      {#if $user}
        <li class="p-2">
          <a href="/Create">Create</a>
        </li>
        <li class="p-2 hidden">
          <a href="/Login">Login</a>
        </li>
        <button
          class="py-2 px-4 ml-2 bg-blue-900 text-white rounded"
          on:click={logout}>Logout</button
        >
      {:else}
        <li class="p-2 hidden">
          <a href="/">Home</a>
        </li>
        <li class="p-2">
          <a href="/Login">Login</a>
        </li>
      {/if}
    </ul>
  </div>
</nav>
