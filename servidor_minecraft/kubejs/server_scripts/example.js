// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// Registrar nuevo ítem
ItemEvents.registry(event => {
  event.create('example_item').displayName('Example Item')
})