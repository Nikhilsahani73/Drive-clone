// Example JSON data

const filesData = [
  {
    name: "document",
    type: "file-lines",
    owner: "me",
    reason: "july 02/10/25",
    size: "1GB",
    modified: "You opened 02/10/25",
    location: "My Drive"

  },
  {
    name: "image",
    type: "image",
    owner: "me",
    reason: "july 03/10/25",
    size: "132KB",
    location: "My Drive",
    modified: "You opened 02/10/25"
  },
  {
    name: "presentation",
    type: "file-powerpoint",
    owner: "John",
    reason: "july 05/10/25",
    size: "2.5GB",
    modified: "Modified 03/10/25",
    location: "Shared with me"
  },
  {
    name: "report",
    type: "file-word",
    owner: "me",
    reason: "july 07/10/25",
    size: "1.5GB",
    modified: "Shared 05/10/25",
    location: "My Drive"
  }
];



// Populate Home table
const tableBodyHome = document.querySelector(".table-body");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>

  `;
  tableBodyHome.appendChild(row);
});

// Populate Drive table
const tableBodyDrive = document.querySelector(".table-body-drive");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td>${file.reason}</td>
    <td>${file.size}</td>
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>
  `;
  tableBodyDrive.appendChild(row);
});
// Populate Shared table
const tableBodyShared = document.querySelector(".table-body-Shared");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td>${file.reason}</td>
    
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>
  `;
  tableBodyShared.appendChild(row);
});
// Populate Recent table
const tableBodyRecent = document.querySelector(".table-body-Recent");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td>${file.size}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>
  `;
  tableBodyRecent.appendChild(row);
});
// Populate Starred table
const tableBodyStarred = document.querySelector(".table-body-Starred");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td>${file.reason}</td>
    <td>${file.size}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>
  `;
  tableBodyStarred.appendChild(row);
});
// Populate Bin table
const tableBodyBin = document.querySelector(".table-body-Bin");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td class="dropdown-dev">
      <i class="fa-solid fa-ellipsis-vertical option"></i>
      <div class="dropdown-option">
        <ul>
          <li><i class="fa-solid fa-expand"></i> Open With <i class="fa-solid fa-caret-right"
                style="text-align: end; width: 115px;"></i></li>
          <hr>
          <li><i class="fa-solid fa-download"></i> Download</li>
          <li><i class="fa-solid fa-pen-to-square"></i> Rename</li>
          <li><i class="fa-solid fa-copy"></i> Copy</li>
          <hr>
          <li><i class="fa-solid fa-star"></i> Starred</li>
          <li><i class="fa-solid fa-share-nodes"></i> Shareed <i class="fa-solid fa-caret-right" style="text-align: end;width: 135px;"></i></li>
          <li><i class="fa-solid fa-circle-info"></i> File Information <i class="fa-solid fa-caret-right" style="text-align: end;width: 65px;"></i></li>
          <li><i class="fa-solid fa-trash"></i> Bin</li>
        </ul>
      </div>
    </td>
  `;
  tableBodyBin.appendChild(row);
});
const tableBodyStorage = document.querySelector(".table-body-Storage");
filesData.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td>${file.size}</td>
  `;
  tableBodyStorage.appendChild(row);
});
