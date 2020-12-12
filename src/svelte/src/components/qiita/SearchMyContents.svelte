<script>
    import axios from 'axios'
    import {onMount} from 'svelte';
    import SideMenu from "../../SideMenu.svelte";

    let url = 'https://qiita.com/api/v2/users/rhirabay/items'

    let items = []
    let filter = ''
    $: filteredItems = items.filter(item => {
        for (let f of filter.split(' ')) {
            if (item.lowerTitle.indexOf(f) === -1) {
                return false
            }
        }
        return true
    })

    function getContents() {
        axios.get(url).then(res => {
            items = res.data.map((value) => ({
                title: value.title,
                url: value.url,
                lowerTitle: value.title.toLowerCase()
            }))
        })
    }

    onMount(getContents)
</script>

<SideMenu/>

<input type='text' bind:value={filter} placeholder="Enter filter" class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />

<ul class="">
    {#each filteredItems as item, index}
    <li class="border list-none rounded-sm px-3 py-3"><a target="_blank" href={item.url}>{item.title}</a></li>
    {/each}
</ul>

<svelte:head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>