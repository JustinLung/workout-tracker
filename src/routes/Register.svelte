<script>
  import { readable } from 'svelte/store'

  import { supabase } from '../supabase'

  let loading = false
  let email, password, confirmPassword
  let message = { success: null, display: '' }

  const handleSignUp = async () => {
    if (password != confirmPassword) {
      message = {
        success: false,
        display: 'Password and Confirm Password fields do not match',
      }
      return
    }

    try {
      loading = true
      const { error } = await supabase.auth.signUp({ email, password })
      console.log(error)
      if (error) throw error
      message = {
        success: true,
        display:
          'We have sent you an confirmation email. Please check your email',
      }
    } catch (error) {
      console.log(error)
      let errorMsg = error.error_description || error.message
      message = { success: false, display: errorMsg }
    } finally {
      loading = false
    }
  }
</script>

<h1 class="text-2xl mt-10 font-bold text-center md:text-3xl">Register</h1>
<p class="text-center">Register an account to track your excercises.</p>

<div class="max-w-sm mx-auto mt-5" on:submit|preventDefault={handleSignUp}>
  <form class="flex flex-col">
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
    <label for="password">Confirm Password</label>
    <input
      type="password"
      name="confPassword"
      class="bg-gray-200 border-1 h-10 rounded p-2"
      placeholder="Your password"
      bind:value={confirmPassword}
    />
    <input
      type="submit"
      class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
      value={loading ? 'Loading' : 'Sign up'}
      disabled={loading}
    />
    {#if message.success != null}
      <p
        class="alert {message.success
          ? 'alert-success'
          : 'alert-danger'} text-center"
        role="alert"
      >
        {message.display}
      </p>
    {/if}
    <p class="pt-2 text-center">
      Already have an account yet? <a href="/Login" class="text-blue-900"
        >Sign In</a
      >
    </p>
  </form>
</div>
