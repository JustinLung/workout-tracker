<script>
  import { supabase } from '$lib/supabase'
  import { page } from '$app/stores'
  const id = $page.params.id

  const renderWorkout = async () => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .select()
        .eq('id', id)
      console.log(data)
      return data[0]
    } catch (error) {
      console.log(error)
    }
  }
</script>

{#await renderWorkout()}
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
  <section class="max-w-sm m-auto my-40">
    <div class="rounded overflow-hidden shadow-lg mt-10 p-4">
      <h2 class="text-xl font-bold pt-2">{data.workoutName}</h2>
      <p><span class="font-bold">Workout Type: </span>{data.workoutType}</p>
      <p><span class="font-bold">Description: </span>{data.description}</p>
      <div>
        <p class="font-bold">Exercises:</p>
        <p class="max-w-xs">{data.exercises}</p>
      </div>
      <a
        href="/"
        class="inline-block bg-gray-200 px-3 pb-1 text-sm font-semibold text-gray-700 mb-5 w-full text-center"
        >Return Home</a
      >
    </div>
  </section>
{/await}
