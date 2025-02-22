<script module lang="ts">
    interface Props {
        name: string;
    }
</script>

<script lang="ts">
    const { name }: Props = $props();
</script>


<svg viewBox="0 0 35 35">
    <use xlink:href="./icons/{name}.svg"></use>
</svg>
