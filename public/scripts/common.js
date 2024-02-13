document.querySelectorAll(".product_navmenu_list_item").forEach((item) => {
    item.querySelector("a").addEventListener("click", (e) => {
        document.querySelectorAll(".product_navmenu_list_item").forEach((menu) => {
            if (menu.querySelector("a") != e.target) {
                const dropdown = menu.querySelector(".dropdown-container");
                if (dropdown) {
                    setTimeout(() => {
                        dropdown.classList.add("collapse");
                    }, 1000);
                    dropdown.classList.remove("show");
                }
            }
        });
    });
});