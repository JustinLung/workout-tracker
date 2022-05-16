<script>
  import { supabase } from '../supabase'

  async function getWorkouts() {
    try {
      const { data, error } = await supabase.from('workouts').select('*')
      return data
    } catch (error) {
      console.error(error)
    }
  }
</script>

<section>
  <h2 class="text-3xl text-center pt-10 font-bold">
    Welcome to FitnessTracker
  </h2>
  <div class="grid grid-cols-1 lg:grid-cols-4 mx-auto max-w-screen-xl">
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
        <div class="rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <h3 class="text-xl font-bold">{workout.workoutName}</h3>
            <p>{workout.workoutType}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <a
              href="/"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >View Workout</a
            >
          </div>
          <p class="px-6 pb-2">Posted At: <time>{workout.created_at}</time></p>
        </div>
      {/each}
    {:catch error}
      <p>Something went wrong while fetching the data:</p>
      <pre>{error}</pre>
    {/await}
  </div>
</section>

<style>
  .preloader {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .bar {
    width: 10px;
    height: 70px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
    animation: loader 1.2s linear infinite;
  }
  .bar1 {
    animation-delay: 0.1s;
  }
  .bar2 {
    animation-delay: 0.2s;
  }
  .bar3 {
    animation-delay: 0.3s;
  }
  .bar4 {
    animation-delay: 0.4s;
  }
  .bar5 {
    animation-delay: 0.5s;
  }
  .bar6 {
    animation-delay: 0.6s;
  }
  .bar7 {
    animation-delay: 0.7s;
  }
  .bar8 {
    animation-delay: 0.8s;
  }

  @keyframes loader {
    0% {
      transform: scaleY(0.1);
      background: #003366;
    }
    50% {
      transform: scaleY(1);
      background: #003366;
    }
    100% {
      transform: scaleY(0.1);
      background: transparent;
    }
  }
</style>
