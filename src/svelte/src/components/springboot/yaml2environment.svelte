<script>
    import jsyaml from 'js-yaml';
    import SideMenu from "../../SideMenu.svelte";

    function jsonToEnv(json, prefix) {
        let env_list = []
        console.log(`type: ${typeof json}, prefix: ${prefix}`)
        if(json instanceof Array) {
            for (let value of json) {
                env_list = [
                    ...env_list,
                    ...jsonToEnv(value, prefix)
                ]
            }
            return env_list
        } else if(typeof json === 'object') {
            for(let key in json) {
                let next_prefix = '';
                if(prefix.length === 0) {
                    next_prefix = convertUpperCaseAndUnderBar(key);
                } else {
                    next_prefix = prefix + "_" + convertUpperCaseAndUnderBar(key);
                }

                env_list = [
                    ...env_list,
                    ...jsonToEnv(json[key], next_prefix)
                ]
            }
            return env_list
        } else {
            return [`export ${prefix}="${json}"`];
        }
    }

    let convertUpperCaseAndUnderBar = function(value) {
        // 大文字を小文字に変換＆_付与
        value = value.replace(/([A-Z])/g, function(s) {
            return '_' + s.charAt(0).toLowerCase();
        });
        value = value.replace(/\-/g, '_');
        return value.toUpperCase();
    };

    function yamlToEnv(yaml) {
        try {
            console.log(`yaml: ${yaml}`)
            let json = jsyaml.load(yaml);
            if (json === undefined) {
                return ''
            }
            console.log(`json: ${JSON.stringify(json)}`)
            let result = jsonToEnv(json, '');

            return result.join('\n')
        } catch (err) {
            return ''
        }

    }

    let yaml = ''
    $: environment = yamlToEnv(yaml)
</script>

<SideMenu/>

<div>
    <h1 class="text-center">Yaml→environment</h1>
    <div class="grid grid-cols-2">
        <div>
            <label for="target">yaml</label>
            <textarea bind:value={yaml} rows="30" id="target" class="w-11/12 m-2 px-3 py-2"></textarea>
        </div>
        <div>
            <label for="result">Env</label>
            <textarea bind:value={environment} id="result" rows="30" class="w-11/12 m-2 px-3 py-2"></textarea>
        </div>
    </div>
</div>