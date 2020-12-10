const allEmployees = [
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
    stilling: 'Regnskapsfører',
  },
  {
    navn: 'Ole Olesen',
    stilling: 'Rørlegger',
  },
  {
    navn: 'Sigmund Sigmundsen',
    stilling: 'Rørlegger',
  },
  {
    navn: 'Aleks Aleksandersen',
    stilling: 'Parkeringsvakt',
  },
  {
    navn: 'Jens Jensen',
    stilling: 'Rørlegger',
  },
  {
    navn: 'Grete Gretesen',
    stilling: 'Rørlegger',
  },
  {
    navn: 'Sigurd Sigurdsen',
    stilling: 'Regnskapsfører',
  },
];

const getEmployees = () => allEmployees;

const generateOfficeEmployeeList = () => {
  const list = [];
  for (let i = 1; i < 22; i += 1) {
    list[i - 1] = {
      officeId: i,
      employees: getEmployees(),
    };
  }
  return list;
};

const employeesList = generateOfficeEmployeeList();

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
      {
        id: 4,
        office: 'Rørlegger 4',
        address: 'rørleggerveien 4',
        phone: '69 99 00 00',
        email: 'fredrikstad4@epost.no',
      },
      {
        id: 5,
        office: 'Rørlegger 5',
        address: 'rørleggerveien 5',
        phone: '69 99 00 00',
        email: 'fredrikstad5@epost.no',
      },
      {
        id: 6,
        office: 'Rørlegger 6',
        address: 'rørleggerveien 6',
        phone: '69 99 00 00',
        email: 'fredrikstad6@epost.no',
      },
      {
        id: 7,
        office: 'Rørlegger 7',
        address: 'rørleggerveien 7',
        phone: '69 99 00 00',
        email: 'fredrikstad7@epost.no',
      },
    ],
  },
  {
    location: 'Sarpsborg',
    offices: [
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
      {
        id: 10,
        office: 'Rørlegger 10',
        address: 'rørleggerveien 10',
        phone: '69 99 00 00',
        email: 'sarpsborg10@epost.no',
      },
      {
        id: 11,
        office: 'Rørlegger 11',
        address: 'rørleggerveien 11',
        phone: '69 99 00 00',
        email: 'sarpsborg11@epost.no',
      },
      {
        id: 12,
        office: 'Rørlegger 12',
        address: 'rørleggerveien 12',
        phone: '69 99 00 00',
        email: 'sarpsborg12@epost.no',
      },
      {
        id: 13,
        office: 'Rørlegger 13',
        address: 'rørleggerveien 13',
        phone: '69 99 00 00',
        email: 'sarpsborg13@epost.no',
      },
    ],
  },
  {
    location: 'Moss',
    offices: [
      {
        id: 14,
        office: 'Rørlegger 14',
        address: 'rørleggerveien 14',
        phone: '69 99 00 00',
        email: 'moss14@epost.no',
      },
      {
        id: 15,
        office: 'Rørlegger 15',
        address: 'rørleggerveien 15',
        phone: '69 99 00 00',
        email: 'moss15@epost.no',
      },
      {
        id: 16,
        office: 'Rørlegger 16',
        address: 'rørleggerveien 16',
        phone: '69 99 00 00',
        email: 'moss16@epost.no',
      },
      {
        id: 17,
        office: 'Rørlegger 17',
        address: 'rørleggerveien 17',
        phone: '69 99 00 00',
        email: 'moss17@epost.no',
      },
      {
        id: 17,
        office: 'Rørlegger 17',
        address: 'rørleggerveien 17',
        phone: '69 99 00 00',
        email: 'moss17@epost.no',
      },
      {
        id: 18,
        office: 'Rørlegger 18',
        address: 'rørleggerveien 18',
        phone: '69 99 00 00',
        email: 'moss18@epost.no',
      },
      {
        id: 19,
        office: 'Rørlegger 19',
        address: 'rørleggerveien 19',
        phone: '69 99 00 00',
        email: 'moss19@epost.no',
      },
      {
        id: 20,
        office: 'Rørlegger 20',
        address: 'rørleggerveien 20',
        phone: '69 99 00 00',
        email: 'moss20@epost.no',
      },
      {
        id: 21,
        office: 'Rørlegger 21',
        address: 'rørleggerveien 21',
        phone: '69 99 00 00',
        email: 'moss21@epost.no',
      },
    ],
  },
];

export { officeList, employeesList };
