<template>
    <svg class="svg-class" :class="className" aria-hidden="true">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>、
<script>
import { ref ,computed} from 'vue';
export default{
    name:"SvgIcon",
    props:{
        iconName:{
            type:String,
            defalt:""
        },
        className:{
            type:String,
            defalt:""
        }
    },
    setup(props){
        const svgClassName=ref(props.className)
        const SvgIcon =computed(()=>`#icon-${props.iconName}`)
        return {svgClassName}
    }
}
</script>
<style>
.svg-class{
    width: 1em;
    height: 1em;
    fill:currentColor;
}
</style>