import { z } from "zod";

import sapiEvent from "./sapi-event";

const Schema = z.object({
  data: z.object({
    type: z.literal("sapi"),
    description: z.string(),
  }),
});

Schema.parse(sapiEvent);
