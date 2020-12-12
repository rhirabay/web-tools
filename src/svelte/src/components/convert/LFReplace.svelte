<script>
    import SideMenu from "../../SideMenu.svelte";

    let log = ''
    $: replaced = log.replace(/__LF__/g, '\n')
</script>

<SideMenu/>

<textarea bind:value={log} class="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>

<pre class="bg-indigo-200 rounded-lg mt-5 px-3 py-2">{replaced}</pre>