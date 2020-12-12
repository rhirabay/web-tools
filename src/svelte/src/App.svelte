<script>
	import Router from 'svelte-spa-router'
	import SearchMyContents from './components/qiita/SearchMyContents.svelte'
	import LFReplacer from './components/convert/LFReplace.svelte'
	import Base64 from './components/convert/Base64.svelte'
    import Home from './Home.svelte'

    const routes = {
        '/qiita/search-my-contents': SearchMyContents,
        '/convert/LFReplacer': LFReplacer,
        '/convert/Base64': Base64,
        '*': Home
    }
</script>

<Router routes={routes}/>