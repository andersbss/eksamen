const officeList = [
  {
    location: 'Fredrikstad',
    offices: [
      {
        id: 1,
        office: 'Rørlegger 1',
        address: 'rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 2,
        office: 'Rørlegger 2',
        address: 'rørleggerveien 2',
        phone: '69 99 00 00',
        email: 'fredrikstad2@epost.no',
      },
      {
        id: 3,
        office: 'Rørlegger 3',
        address: 'rørleggerveien 3',
        phone: '69 99 00 00',
        email: 'fredrikstad3@epost.no',
      },
    ],
  },
  {
    location: 'Sarpsborg',
    offices: [
      {
        id: 4,
        office: 'Rørlegger 4',
        address: 'rørleggerveien 4',
        phone: '69 99 00 00',
        email: 'sarpsborg4@epost.no',
      },
      {
        id: 5,
        office: 'Rørlegger 5',
        address: 'rørleggerveien 5',
        phone: '69 99 00 00',
        email: 'sarpsborg5@epost.no',
      },
      {
        id: 6,
        office: 'Rørlegger 6',
        address: 'rørleggerveien 6',
        phone: '69 99 00 00',
        email: 'sarpsborg6@epost.no',
      },
      {
        id: 7,
        office: 'Rørlegger 7',
        address: 'rørleggerveien 7',
        phone: '69 99 00 00',
        email: 'sarpsborg7@epost.no',
      },
      {
        id: 8,
        office: 'Rørlegger 8',
        address: 'rørleggerveien 8',
        phone: '69 99 00 00',
        email: 'sarpsborg8@epost.no',
      },
      {
        id: 9,
        office: 'Rørlegger 9',
        address: 'rørleggerveien 9',
        phone: '69 99 00 00',
        email: 'sarpsborg9@epost.no',
      },
    ],
  },
  {
    location: 'Moss',
    offices: [
      {
        id: 10,
        office: 'Rørlegger 10',
        address: 'rørleggerveien 10',
        phone: '69 99 00 00',
        email: 'moss10@epost.no',
      },
      {
        id: 11,
        office: 'Rørlegger 11',
        address: 'rørleggerveien 11',
        phone: '69 99 00 00',
        email: 'moss11@epost.no',
      },
      {
        id: 12,
        office: 'Rørlegger 12',
        address: 'rørleggerveien 12',
        phone: '69 99 00 00',
        email: 'moss12@epost.no',
      },
    ],
  },
];

const employeesList = [
  {
    officeId: 1,
    employees: [
      {
        navn: 'Jan Jansen',
        stilling: 'Kontorsjef',
      },
      {
        navn: 'Per Persen',
        stilling: 'Regnskapsfører',
      },
      {
        navn: 'Bjørn Bjørnsen',
        stilling: 'Rørlegger',
      },
    ],
  },
  {
    officeId: 2,
    employees: [
      {
        navn: 'Jon Jonsen',
        stilling: 'Rørlegger',
      },
      {
        navn: 'Kari Karisen',
        stilling: 'Regnskapsfører',
      },
      {
        navn: 'Bjørn Bjørnsen',
        stilling: 'Kontorsjef',
      },
      {
        navn: 'Jørgen Jørgesen',
        stilling: 'Renholderske',
      },
    ],
  },
];

export { officeList, employeesList };
