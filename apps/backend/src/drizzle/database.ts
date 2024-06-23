import db from './';

const getCampaignsForFrontend = async () => {
  return await db.query.Exercise.findMany({
    columns: {
      id: true,
      name: true,
      code: true,
      lastModifiedDate: true,
    },
  });
};

export { getCampaignsForFrontend };
