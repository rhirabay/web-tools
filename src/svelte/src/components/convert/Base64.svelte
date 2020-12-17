<script>
    import SideMenu from "../../SideMenu.svelte";

    let target = ''
    let mode = 'enc' // or 'dec'
    $: converted = mode === 'enc' ? encode(target) : decode(target)
    $: converted2 = mode === 'enc' ? encode(converted) : decode(converted)

    function changeMode(nextMode) {
        mode = nextMode
    }

    function encode(str) {
        try {
            return window.btoa(str)
        } catch (err) {
            return ''
        }
    }

    function decode(str) {
        try {
            return window.atob(str)
        } catch (err) {
            return ''
        }
    }
</script>

<div class="static">
    <SideMenu/>
</div>
<br class="mb-5">

<div class="static">
    <buutton class="rounded px-4 py-2 cursor-default static {
        mode === 'enc'
        ? 'bg-green-500 text-gray-100 hover:bg-green-400'
        : 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-100'
        }" on:click={() => changeMode('enc')}>Encode</buutton>

    <buutton class="rounded px-4 py-2 cursor-default static {
        mode === 'dec'
        ? 'bg-red-500 text-gray-100 hover:bg-red-400'
        : 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100'
        }" on:click={() => changeMode('dec')}>Decode</buutton>

    <textarea bind:value={target} class="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>

    <pre class="bg-indigo-200 rounded-lg mt-5 px-3 py-2 whitespace-pre-line break-words">{converted}</pre>
    <pre class="bg-indigo-200 rounded-lg mt-5 px-3 py-2 whitespace-pre-line break-words">{converted2}</pre>
</div>