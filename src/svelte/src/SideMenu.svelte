<script>
    import { push } from 'svelte-spa-router'
    let open = false

    const links = [
        {title: 'Qiita My Contents', uri: '/qiita/search-my-contents'},
        {title: 'LF置換', uri: '/convert/LFReplacer'},
        {title: 'Base64 enc/dec', uri: '/convert/Base64'},
    ]
</script>

<aside class="absolute h-full bg-gray-200 border-r-2 shadow-lg" class:open>
    <nav class="p-12 text-xl">
        {#each links as link, index}
        <div class="block cursor-pointer hover:underline" on:click={() => push(link.uri)}>{link.title}</div>
        {/each}
    </nav>
</aside>

<div class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
    <nav class="flex">
        <button class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none" class:open on:click={() => open = !open}>
            <svg width=32 height=24>
                <line id="top" x1=0 y1=2  x2=32 y2=2 />
                <line id="middle" x1=0 y1=12 x2=24 y2=12 />
                <line id="bottom" x1=0 y1=22 x2=32 y2=22 />
            </svg>
        </button>
        <svg width=auto height=30>
            <text x=0 y=20>Menu</text>
        </svg>
    </nav>
</div>

<style>
    aside {
        left: -100%;
        transition: left 0.3s ease-in-out
    }

    .open {
        left: 0
    }

    svg {
        min-height: 24px;
        transition: transform 0.3s ease-in-out;
    }

    svg line {
        stroke: currentColor;
        stroke-width: 3;
        transition: transform 0.3s ease-in-out
    }

    button {
        z-index: 20;
    }

    .open svg {
        transform: scale(0.7)
    }

    .open #top {
        transform: translate(6px, 0px) rotate(45deg)
    }

    .open #middle {
        opacity: 0;
    }

    .open #bottom {
        transform: translate(-12px, 9px) rotate(-45deg)
    }
</style>

<svelte:head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>
