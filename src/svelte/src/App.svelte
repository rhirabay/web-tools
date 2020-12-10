<script>
	import Router from 'svelte-spa-router'
	import SearchMyContents from './components/qiita/SearchMyContents.svelte'
    import Home from './Home.svelte'

    const routes = {
        '/qiita/search-my-contents': SearchMyContents,
        '*': Home
    }
</script>

<Router routes={routes}/>