var contactInfo = [];

function joinData() {
  names.forEach(function(name, index) {
    var n = {};
    n.lastName = name.data.substring(name.data.lastIndexOf(' ') + 1);
    n.firstName = name.data.substring(0, name.data.indexOf(' '));
    n.city = cities[ramdomNum(cities.length)].data;
    n.department = departments[ramdomNum(departments.length)].data;
    contactInfo.push(n);
  });
}

function ramdomNum(size) {
  return Math.floor(Math.random() * size);
}

function sortByName() {
  contactInfo.sort(function(a, b) {
    var nameA = a.lastName.toUpperCase();
    var nameB = b.lastName.toUpperCase();
    var fNameA = a.firstName.toUpperCase();
    var fNameB = b.firstName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA === nameB) {
      if (fNameA < fNameB) {
        return -1;
      }
      if (fNameA > fNameB) {
        return 1;
      }
    }
    return 0;
  });
}

function sortByDept() {
  contactInfo.sort(function(a, b) {
    var deptA = a.department.toUpperCase();
    var deptB = b.department.toUpperCase();
    var nameA = a.lastName.toUpperCase();
    var nameB = b.lastName.toUpperCase();
    var fNameA = a.firstName.toUpperCase();
    var fNameB = b.firstName.toUpperCase();
    if (deptA < deptB) {
      return -1;
    }
    if (deptA > deptB) {
      return 1;
    }
    if (deptA === deptB) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      if (nameA === nameB) {
        if (fNameA < fNameB) {
          return -1;
        }
        if (fNameA > fNameB) {
          return 1;
        }
      }
      return 0;
    }
    return 0;
  });
}

joinData();

function browseByDept() {
  sortByDept();
}

function searchByName() {
  sortByName();
}

var vue1 = new Vue({
  el: '#results',
  data: {
    contacts: contactInfo,
  },
});
