const tasks = [
    {
      task: 'Feed cat',
      completed: false,
      assignedTo: ['Stan'],
      recurs: 'Daily',
      tags: ['quick', 'physical'],
      priority: 1,
      notes: [
        {
            id: 0,
            text: 'Add laxatone dab.',
            author: 'Stephanie'
        },
        {
            id: 1,
            text: 'Extra food bag is in the pantry.',
            author: 'Stephanie'
        }
      ]
    },
    {
      task: 'Get groceries',
      completed: true,
      assignedTo: ['Alex'],
      recurs: 'Weekly',
      tags: ['travel', 'long', 'physical'],
      priority: 2,
      notes: [
        {
            id: 0,
            text: 'Remember to use our grocery bags.',
            author: 'Kyle'
        },
        {
            id: 0,
            text: "Rouses' doesn't carry the fancy chocolate anymore.",
            author: 'Alex'
        }
      ]
    },
    {
      task: 'Order pet medication',
      completed: false,
      assignedTo: ['Stephanie'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 3,
      notes: [
        {
            id: 0,
            text: 'Should arrive in one week.',
            author: 'Stephanie'
        }
      ]
    },
    {
      task: 'Pay rent',
      completed: true,
      assignedTo: ['Alex', 'Stephanie', 'Stan', 'Kyle'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 4,
      notes:  [
        {
            id: 0,
            text: 'Check is on the desk in my room.',
            author: 'Kyle'
        }
      ]
    },
    {
      task: 'Do dishes',
      completed: false,
      assignedTo: ['Kyle'],
      recurs: 'Weekly',
      tags: ['physical', 'long'],
      priority: 5,
      notes: [
        {
            id: 0,
            text: 'Remember to hand wash non-stick pan.',
            author: 'Stan'
        }
      ]
    },
  ];

  // filter for tasks that are physical

  // filter for tasks noted by Stephanie

  // use reduce to create string by priority

