# menu-link-highlighter
A code to highlight/activate menu on changing navigations, written in jQuery and JavaScript by me.

Use as below code:

<script src="~/Content/myjs/highlight-menu-link.js" defer="defer"></script>
<script>
    $(document).ready(function () {
        manageMenuForActiveLinks($("YourNavBarObject")); //You can put here NavBar ID/Class/Object
    });
</script>
