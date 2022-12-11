export const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
});
export const greeting = (firstName) => {
  var nowTime = new Date();
  const hour = nowTime.getHours();

  //   console.log(nowTime);
  if (hour >= 20) {
    return `Good Night ${firstName}  , Have a good night rest.`;
  } else if (hour > 17) {
    return `Good Evening ${firstName} , Hope you enjoyed your day?`;
  } else if (hour > 11) {
    return `Good Afternoon ${firstName} , How is your day going?`;
  } else if (hour < 12) {
    return `Good Morning ${firstName} , How was your night?`;
  }
};

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getAddressObject = (geocodeObj) => {
  const address_components = geocodeObj.address_components;
  console.log(address_components);
  const ShouldBeComponent = {
    street_number: ["street_number"],
    postal_code: ["postal_code"],
    street: ["street_address", "route"],
    province: [
      "administrative_area_level_1",
      "administrative_area_level_2",
      "administrative_area_level_3",
      "administrative_area_level_4",
      "administrative_area_level_5",
    ],
    city: [
      "locality",
      "sublocality",
      "sublocality_level_1",
      "sublocality_level_2",
      "sublocality_level_3",
      "sublocality_level_4",
    ],
    country: ["country"],
  };

  let address = {
    street_number: "",
    postal_code: "",
    street: "",
    province: "",
    city: "",
    country: "",
  };

  address_components.forEach((component) => {
    for (var shouldBe in ShouldBeComponent) {
      if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
        if (shouldBe === "country") {
          address[shouldBe] = component.short_name;
        } else {
          address[shouldBe] = component.long_name;
        }
      }
    }
  });

  // Fix the shape to match our schema
  address.address = address.street_number + " " + address.street;
  address.lat = geocodeObj.geometry.location.lat();
  address.lng = geocodeObj.geometry.location.lng();
  address.formatted_address = geocodeObj.formatted_address;

  return address;
};
