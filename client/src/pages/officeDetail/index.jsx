import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import { officeList } from '../../mockUpData';
import Paragraph from '../../components/common/Paragraph';
import Employees from '../../components/Employees';
import MediumTitle from '../../components/titles/MediumTitle';
import ContactUs from '../../components/ContactUs';

const OfficeDetail = () => {
  const { id } = useParams();
  const [specificOffice, setSpecificOffice] = useState({});
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (id) {
      officeList.forEach((element) => {
        element.offices.forEach((el) => {
          if (el.id === parseInt(id)) {
            setLocation(element.location);
            setSpecificOffice(el);
          }
        });
      });
    }
  }, [specificOffice, id]);

  return (
    <>
      <Jumbotron headerText={`Kontor ${specificOffice.office}`} />
      <Paragraph
        header={`Velkommen til ${specificOffice.office}`}
        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet"
      />
      <MediumTitle content="Våre ansatte" />
      <Employees officeId={id} />
      <ContactUs content={`Kontakt oss på ${specificOffice.phone}`} />
    </>
  );
};

export default OfficeDetail;
