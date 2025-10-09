// Example JSON data

const filesData = [
  {
    name: "document",
    type: "file-lines",
    owner: "me",
    reason: "july 02/10/25",
    size: "1GB",
    location: "My Drive"
  },
  {
    name: "image",
    type: "image",
    owner: "me",
    reason: "july 03/10/25",
    size: "132KB",
    location: "My Drive"
  },
  {
    name: "presentation",
    type: "file-powerpoint",
    owner: "John",
    reason: "july 05/10/25",
    size: "2.5GB",
    location: "Shared with me"
  },
  {
    name: "report",
    type: "file-word",
    owner: "me",
    reason: "july 07/10/25",
    size: "1.5GB",
    location: "My Drive"
  }
];

const filesDataRecent = [
  {
    name: "document",
    type: "file-lines",
    reason: "You opened 02/10/25",
    owner: "me",
    size: "1.5GB",
    location: "My Drive"
  },
  {
    name: "image",
    type: "image",
    reason: "Modified 03/10/25",
    owner: "me",
    size: "1.5GB",
    location: "My Drive"
  },
  {
    name: "presentation",
    type: "file-powerpoint",
    reason: "Shared 05/10/25",
    owner: "John",
    size: "1.5GB",
    location: "Shared with me"
  },
  {
    name: "report",
    type: "file-word",
    reason: "july 07/10/25",
    owner: "me",
    size: "1.5GB",
    location: "My Drive"
  }
];

// Populate Home table
const tableBodyHome = document.querySelector(".table-body");
filesDataRecent.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
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
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
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
    
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
  `;
  tableBodyShared.appendChild(row);
});
// Populate Recent table
const tableBodyRecent = document.querySelector(".table-body-Recent");
filesDataRecent.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td>${file.size}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
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
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
  `;
  tableBodyStarred.appendChild(row);
});
// Populate Bin table
const tableBodyBin = document.querySelector(".table-body-Bin");
filesDataRecent.forEach((file) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><i class="fa-solid fa-${file.type}"></i> ${file.name}</td>
    <td>${file.reason}</td>
    <td><i class="fa-regular fa-circle-user"></i> ${file.owner}</td>
    <td><i class="fa-regular fa-hard-drive"></i> ${file.location}</td>
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
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