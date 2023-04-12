'use strict';

/**
 * postal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postal.postal');
