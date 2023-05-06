REIEvents.removeCategories((event) => {
  //major change here
  const removeCategories = [
    "create:draining",
    "create:automatic_shapeless",
    "create:automatic_shaped",
    "create:automatic_packaging",
    "create:automatic_packing",
    "minecraft:plugins/tag",
  ];

  removeCategories.forEach((id) => {
    event.remove(id);
  });
});
