const surveys = [
  {
    id: 1,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Complete'
  },
  {
    id: 2,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Not Started'
  },
  {
    id: 3,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Complete'
  },
  {
    id: 4,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Not Started'
  },
  {
    id: 5,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Not Started'
  },
  {
    id: 6,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 7,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 8,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 9,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 10,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 11,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
  {
    id: 12,
    startDate: '2021-05-01',
    endDate: '2021-05-08',
    street1: 'Queen Street West',
    street2: 'Bathurst Street',
    city: 'Toronto',
    province: 'Ontario',
    surveyType: 'Left-Hand Turn',
    note: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'In Progress'
  },
];

const data = document.querySelector('#data');

const renderData = () => {
  data.innerHTML = "";

  for (survey of surveys) {
    const startDate = document.createElement('div');
    const endDate = document.createElement('div');
    const street1 = document.createElement('div');
    const street2 = document.createElement('div');
    const city = document.createElement('div');
    const province = document.createElement('div');
    const surveyType = document.createElement('div');
    const note = document.createElement('div');
    const status = document.createElement('p');

    startDate.innerText = `${survey.startDate}`;
    endDate.innerText = `${survey.endDate}`;
    street1.innerText = `${survey.street1}`;
    street2.innerText = `${survey.street2}`;
    city.innerText = `${survey.city}`;
    province.innerText = `${survey.province}`;
    surveyType.innerText = `${survey.surveyType}`;
    note.innerText = `${survey.note}`;
    status.innerText = `${survey.status}`;

    data.appendChild(startDate);
    data.appendChild(endDate);
    data.appendChild(street1);
    data.appendChild(street2);
    data.appendChild(city);
    data.appendChild(province);
    data.appendChild(surveyType);
    data.appendChild(note);
    data.appendChild(status);

    if (survey.status === 'Complete') {
      
    }
  }

  
};

renderData();