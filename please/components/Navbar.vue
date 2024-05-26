<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Features',
                    icon: 'pi pi-star'
                },
                {
                    label: 'Projects',
                    icon: 'pi pi-box',
                },
            ]
        };
    }
};
</script>