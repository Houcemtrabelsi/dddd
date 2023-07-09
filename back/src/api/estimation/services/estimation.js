'use strict';

/**
 * estimation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::estimation.estimation');
