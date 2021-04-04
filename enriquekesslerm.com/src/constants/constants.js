import {markers} from './travel-markers'

export const constants = {
  aboutMeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lacus, vestibulum at fermentum a, fermentum ut arcu. Phasellus eget velit est. Vivamus id fringilla ligula, quis pulvinar orci. Morbi dignissim dui libero, at varius justo mollis in. Pellentesque suscipit vitae lorem a volutpat. Phasellus mattis sagittis erat quis mollis.',
  
  cqWebDescription: 'Django Web-App for studying which creates an easier customer experience applying a mix between “Flash Cards” and “Active Recall” studying techniques.',
  
  appMusicDescription: 'Maven Desktop App created with functionality that allows for xml importing, and implemented with patterns from the GoF Design Patterns book.',
  
  timelineElements: [
    {
      'year': 2021,
      'events': [
        { 'info': '' },
      ],
    },
    {
      'year': 2020,
      'events': [
        { 'info': 'this is the info for the 2020 event' },
        { 'info': 'this is the second event for 2020' },
      ],
    },
  ],
  
  markers: [...markers],
}

