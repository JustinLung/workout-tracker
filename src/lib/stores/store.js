import { writable } from 'svelte/store'
import { supabase } from "../../supabase";

export const user = writable(false)
