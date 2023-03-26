(() => {
  setTimeout(() => {
    $("#Training").DataTable({
      ajax: {
        url: "../../assets/templates/22/export.json",
        dataSrc: "",
      },
      header: true,
      order: [[5, "desc"]],
      columns: [
        { data: "Type", title: "Type" },
        { data: "Name", title: "Name" },
        { data: "Status", title: "Status" },
        { data: "Score /5", title: "Score /5" },
        { data: "Author", title: "Author" },
        { data: "Completed Date", title: "Completed Date" },
        { data: "Publisher", title: "Publisher" },
        { data: "Publishing/Release Date", title: "Publishing/Release Date" },
        {
          data: "Link",
          title: "Link",
          fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
            $(nTd).html("<a href=" + oData.Link + " target=_blank'>Link</a>");
          },
        },
      ],
    });
    document.getElementById("Loading").remove();
  }, 0);
})();
