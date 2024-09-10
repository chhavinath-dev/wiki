let userInp = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResults");
let ld = document.getElementById("spinner");

function createAndAppend(items) {
    let {
        title,
        link,
        description
    } = items;
    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    searchResult.appendChild(resultItem);
    let aELe = document.createElement("a");
    aELe.href = link;
    aELe.target = "_blank";
    aELe.textContent = title;
    aELe.classList.add("result-title");
    resultItem.appendChild(aELe);
    let breakEle1 = document.createElement("br");
    resultItem.appendChild(breakEle1);
    let linkEle = document.createElement("a");
    linkEle.href = link;
    linkEle.target = "_blank";
    linkEle.textContent = link;
    linkEle.classList.add("result-url");
    resultItem.appendChild(linkEle);
    let breakEle2 = document.createElement("br");
    resultItem.appendChild(breakEle2);
    let descriptionEle = document.createElement("p");
    descriptionEle.classList.add("link-description");
    descriptionEle.textContent = description;
    resultItem.appendChild(descriptionEle);
}

function sendRequest(event) {

    if (event.key === "Enter") {
        searchResult.textContent = "";
        ld.classList.toggle("d-none");
        console.log("request")
        let option = {
            method: "GET",
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + userInp.value;
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(json_data) {
                let {
                    search_results
                } = json_data;
                ld.classList.toggle("d-none");
                for (let items of search_results) {
                    createAndAppend(items);
                }
                // createAndAppend(search_results[0]);
            })
    }
}



userInp.addEventListener("keyup", sendRequest);
