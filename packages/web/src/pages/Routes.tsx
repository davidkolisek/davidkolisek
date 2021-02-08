export const auth = {
  signIn: "/sign-in"
};

export const base = {
  home: "",
  vstavaneSkrine: "/vstavane-skrine",
  kuchyne: "/kuchyne",
  nabytok: "/nabytok",
  materialy : "/materialy",
  kontakt: "/kontakt",
};

const adminPrefix = '/admin';
export const admin = {
  dashboard: adminPrefix + '/dashboard',
  vstavaneSkrine: adminPrefix + "/vstavane-skrine",
  kuchyne: adminPrefix + "/kuchyne",
  nabytok: adminPrefix + "/nabytok",
  materialy : adminPrefix + "/materialy"
};
