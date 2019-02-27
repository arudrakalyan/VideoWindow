/**
 * The type of redux action which stores the log collector that will be
 * submitting the logs to CallStats.
 *
 * {
 *     type: SET_LOG_COLLECTOR,
 *     logCollector: Logger.LogCollector
 * }
 */
export const SET_LOG_COLLECTOR = Symbol('SET_LOG_COLLECTOR');

/**
 * The type of redux action which sets the configuration of the feature
 * base/logging.
 *
 * {
 *     type: SET_LOGGING_CONFIG,
 *     config: Object
 * }
 */
export const SET_LOGGING_CONFIG = Symbol('SET_LOGGING_CONFIG');