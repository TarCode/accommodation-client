export const rooms = [
  {
  _id: "123",
  name: 'Room A1',
  size: 'large',
  img_url: "https://media-cdn.tripadvisor.com/media/photo-s/09/53/d6/5b/protea-hotel-fire-ice.jpg",
  views: [
    'Balcony overlooking beach',
    'Window with view of Table Mountain'
  ],
  amenities: ['Wifi', 'DSTV', 'Air Conditioning'],
  max_roommates: 6,
  current: [
    {
      id: '123',
      name: 'Joe Dirt',
      gender: 'male',
      university: 'Harvard',
      img_url: 'https://randomuser.me/api/portraits/thumb/men/27.jpg'
    },
    {
      id: '124',
      name: 'Sam Lamb',
      gender: 'male',
      university: 'Harvard',
      img_url: 'https://randomuser.me/api/portraits/thumb/women/19.jpg'
    }
  ]
},
{
_id: "124",
name: 'Room A2',
size: 'medium',
img_url: "https://media-cdn.tripadvisor.com/media/photo-s/09/53/d6/5b/protea-hotel-fire-ice.jpg",
views: [
  'Fireplace',
  'Window with view of ocean'
],
amenities: ['Fibre', 'Air Conditioning'],
max_roommates: 4,
current: [
  {
    id: '123',
    name: 'Jam Dunk',
    gender: 'male',
    university: 'Harvard',
    img_url: 'https://randomuser.me/api/portraits/thumb/men/17.jpg'
  }
]
}

]

const imgList = ["https://www.nerdfitness.com/wp-content/uploads/2010/12/Screen-shot-2010-12-20-at-12.45.56-PM.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QtUy0OaPpbaiVNCWipRF4D-VEVK1fUJMO8nj59MxL2J0Jyt6"]
export const room = {
  name: 'Room '+ Math.floor(Math.random() * 99) + 1,
  size: 'large',
  img_url: imgList[(Math.floor(Math.random() * 2) + 1) - 1],
  views: [
    'Balcony overlooking beach',
    'Window with view of Table Mountain'
  ],
  amenities: ['Wifi', 'DSTV', 'Air Conditioning'],
  max_roommates: 6,
}
