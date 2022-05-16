<script>
  import { supabase } from '../lib/supabase'
  import { goto } from '$app/navigation'

  let loading = false
  let email, password
  let message = { success: null, display: '' }
  const user = supabase.auth.user()
  export const session = supabase.auth.session()

  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw error
      message = { success: true, display: 'Successfully logged in!' }
      console.log(user)
      goto('/')
    } catch (error) {
      let errorMsg = error.error_description || error.message
      message = { success: false, display: errorMsg }
    } finally {
      loading = false
    }
  }
</script>

<h1 class="text-2xl mt-10 font-bold text-center md:text-3xl">Log In</h1>
<p class="text-center">Sign in to track your excercises.</p>

<div class="max-w-sm mx-auto mt-5">
  <form class="flex flex-col" on:submit|preventDefault={handleLogin}>
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      class=" bg-gray-200 border-1 h-10 rounded p-2"
      placeholder="Your email"
      bind:value={email}
    />
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      class="bg-gray-200 border-1 h-10 rounded p-2"
      placeholder="Your password"
      bind:value={password}
    />
    <input
      type="submit"
      class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
      value={loading ? 'Loading' : 'Login'}
      disabled={loading}
    />
    {#if message.success != null}
      <div
        class="alert {message.success ? 'alert-success' : 'alert-danger'}"
        role="alert"
      >
        {message.display}
      </div>
    {/if}
    <p class="pt-2 text-center">
      Don't have an account yet? <a href="/Register" class="text-blue-900"
        >Sign Up</a
      >
    </p>
  </form>
</div>
