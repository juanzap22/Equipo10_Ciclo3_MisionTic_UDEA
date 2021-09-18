$(lista_ventas.html).ready(function () {
    $('#table').dataTable({
  
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox select-checkbox-all',
        targets: 0
      }],
      select: {
        style: 'multi',
        selector: 'td:first-child'
      }
    });
  });