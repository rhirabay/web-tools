<script>
	import Router from 'svelte-spa-router'
	import SearchMyContents from './components/qiita/SearchMyContents.svelte'
	import LFReplacer from './components/convert/LFReplace.svelte'
	import Base64 from './components/convert/Base64.svelte'
    import Home from './Home.svelte'
    import Yaml2Environment from './components/springboot/yaml2environment.svelte'

    const routes = {
        '/qiita/search-my-contents': SearchMyContents,
        '/convert/LFReplacer': LFReplacer,
        '/convert/Base64': Base64,
        '/springboot/yaml2environment': Yaml2Environment,
        '*': Home
    }
</script>

<Router routes={routes}/>