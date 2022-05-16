<script>
  import { supabase } from '../lib/supabase'

  async function getWorkouts() {
    try {
      const { data, error } = await supabase.from('workouts').select('*')
      return data
    } catch (error) {
      console.error(error)
    }
  }
</script>

<section
  class="flex flex-col justify-center align-center text-center px-4 py-20 h-80 bg-gray-200"
>
  <h2 class="text-3xl pt-10 font-bold">Hi 👋, Try Some Workouts Today</h2>
  <p class="text-lg">Let's get these gains out before summer!</p>
</section>

<div class="m-4 relative">
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto">
    {#await getWorkouts()}
      <div class="preloader">
        <div class="bar bar1" />
        <div class="bar bar2" />
        <div class="bar bar3" />
        <div class="bar bar4" />
        <div class="bar bar5" />
        <div class="bar bar6" />
        <div class="bar bar7" />
        <div class="bar bar8" />
      </div>
    {:then data}
      {#each data as workout}
        <div class="rounded overflow-hidden shadow-lg mt-10">
          <div class="px-6">
            <h3 class="text-xl font-bold pt-2">{workout.workoutName}</h3>
            <p>
              <span class="font-bold">Workout Type: </span>{workout.workoutType}
            </p>
          </div>
          <p class="px-6">
            <span class="font-bold">Description: </span>{workout.description}
          </p>
          <p class="px-6 pb-2">
            <span class="font-bold">Posted At:</span>
            <time>{workout.created_at}</time>
          </p>
          <div class="px-6">
            <a
              href="workout/{workout.id}"
              class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mb-5 w-full text-center"
              >View Workout</a
            >
          </div>
        </div>
      {/each}
    {:catch error}
      <p>Something went wrong while fetching the data:</p>
      <pre>{error}</pre>
    {/await}
  </div>
</div>
