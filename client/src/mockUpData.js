const officeList = [
  {
    location: 'Fredrikstad',
    offices: [
      {
        id: 1,
        office: 'Rorlegger 1',
        address: 'rorleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 2,
        office: 'Rorlegger 2',
        address: 'rorleggerveien 2',
        phone: '69 99 00 00',
        email: 'fredrikstad2@epost.no',
      },
      {
        id: 3,
        office: 'Rorlegger 3',
        address: 'rorleggerveien 3',
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
        office: 'Rorlegger 4',
        address: 'rorleggerveien 4',
        phone: '69 99 00 00',
        email: 'sarpsborg4@epost.no',
      },
      {
        id: 5,
        office: 'Rorlegger 5',
        address: 'rorleggerveien 5',
        phone: '69 99 00 00',
        email: 'sarpsborg5@epost.no',
      },
      {
        id: 6,
        office: 'Rorlegger 6',
        address: 'rorleggerveien 6',
        phone: '69 99 00 00',
        email: 'sarpsborg6@epost.no',
      },
      {
        id: 7,
        office: 'Rorlegger 7',
        address: 'rorleggerveien 7',
        phone: '69 99 00 00',
        email: 'sarpsborg7@epost.no',
      },
      {
        id: 8,
        office: 'Rorlegger 8',
        address: 'rorleggerveien 8',
        phone: '69 99 00 00',
        email: 'sarpsborg8@epost.no',
      },
      {
        id: 9,
        office: 'Rorlegger 9',
        address: 'rorleggerveien 9',
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
        office: 'Rorlegger 10',
        address: 'rorleggerveien 10',
        phone: '69 99 00 00',
        email: 'moss10@epost.no',
      },
      {
        id: 11,
        office: 'Rorlegger 11',
        address: 'rorleggerveien 11',
        phone: '69 99 00 00',
        email: 'moss11@epost.no',
      },
      {
        id: 12,
        office: 'Rorlegger 12',
        address: 'rorleggerveien 12',
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
