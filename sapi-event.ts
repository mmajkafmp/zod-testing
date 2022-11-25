const sapiEvent = {
  log_id: "90020221124152205124243004385375787317425798760951185490",
  data: {
    date: "2022-11-24T15:22:02.489Z",
    type: "sapi",
    description: "Set the Multi-factor Authentication policies",
    client_id: "P7SZq2verWh0mTlOHckrb9vfF63lPlcO",
    client_name: "",
    ip: "194.247.73.75",
    user_agent: "deploy-cli/7.15.1 (node.js/16.18.1)",
    details: {
      request: {
        method: "put",
        path: "/api/v2/guardian/policies",
        query: {},
        userAgent: "deploy-cli/7.15.1 (node.js/16.18.1)",
        body: [],
        channel: "api",
        ip: "194.247.73.75",
        auth: {
          user: {},
          strategy: "jwt",
          credentials: {
            scopes: [
              "read:client_grants",
              "create:client_grants",
              "delete:client_grants",
              "update:client_grants",
              "read:clients",
              "update:clients",
              "delete:clients",
              "create:clients",
              "read:client_keys",
              "update:client_keys",
              "delete:client_keys",
              "create:client_keys",
              "read:connections",
              "update:connections",
              "delete:connections",
              "create:connections",
              "read:resource_servers",
              "update:resource_servers",
              "delete:resource_servers",
              "create:resource_servers",
              "read:rules",
              "update:rules",
              "delete:rules",
              "create:rules",
              "read:rules_configs",
              "update:rules_configs",
              "delete:rules_configs",
              "read:hooks",
              "update:hooks",
              "delete:hooks",
              "create:hooks",
              "read:actions",
              "update:actions",
              "delete:actions",
              "create:actions",
              "read:email_provider",
              "update:email_provider",
              "delete:email_provider",
              "create:email_provider",
              "read:tenant_settings",
              "update:tenant_settings",
              "read:grants",
              "delete:grants",
              "read:guardian_factors",
              "update:guardian_factors",
              "read:custom_domains",
              "create:custom_domains",
              "update:custom_domains",
              "read:email_templates",
              "create:email_templates",
              "update:email_templates",
              "read:mfa_policies",
              "update:mfa_policies",
              "read:roles",
              "create:roles",
              "delete:roles",
              "update:roles",
              "read:prompts",
              "update:prompts",
              "read:branding",
              "update:branding",
              "read:log_streams",
              "create:log_streams",
              "delete:log_streams",
              "update:log_streams",
              "read:attack_protection",
              "update:attack_protection",
              "read:organizations",
              "update:organizations",
              "create:organizations",
              "delete:organizations",
              "create:organization_connections",
              "read:organization_connections",
              "update:organization_connections",
              "delete:organization_connections",
            ],
          },
        },
      },
      response: {
        statusCode: 200,
        body: [],
      },
    },
    auth0_client: {
      name: "node-auth0",
      version: "2.42.0",
      env: {
        node: "16.18.1",
      },
    },
    log_id: "90020221124152205124243004385375787317425798760951185490",
  },
};

export default sapiEvent;
