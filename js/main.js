console.log("Viola RMSTUDIO Loaded");
let currentLanguage = "en";

function toggleLanguage() {

    if (currentLanguage === "en") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.getElementById("heroTitle").innerHTML =
            "حيث يتحول جمال كل لحظة إلى عمل فني خالد";

        document.getElementById("heroText").innerHTML =
            "التصوير الفوتوغرافي الاحترافي والمطبوعات الفنية";

        document.getElementById("galleryBtn").innerHTML =
            "استعراض المعرض";

        document.getElementById("langBtn").innerHTML =
            "EN";

        currentLanguage = "ar";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("heroTitle").innerHTML =
            "Where the beauty of every moment becomes a timeless work of art.";

        document.getElementById("heroText").innerHTML =
            "Professional Photography and Fine Art Prints";

        document.getElementById("galleryBtn").innerHTML =
            "Explore Gallery";

        document.getElementById("langBtn").innerHTML =
            "AR";

        currentLanguage = "en";
    }
}
