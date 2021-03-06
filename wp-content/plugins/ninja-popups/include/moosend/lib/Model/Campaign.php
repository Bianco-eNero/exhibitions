<?php
/**
 * Campaign
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swaagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Moosend API
 *
 * TODO: Add a description
 *
 * OpenAPI spec version: 1.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;

/**
 * Campaign Class Doc Comment
 *
 * @category    Class
 * @package     Swagger\Client
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class Campaign implements ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      * @var string
      */
    protected static $swaggerModelName = 'Campaign';

    /**
      * Array of property to type mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerTypes = [
        'ab_campaign_type' => 'double',
        'ab_hours_to_test' => 'double',
        'ab_winner' => 'double',
        'ab_winner_selection_type' => 'double',
        'confirmation_to' => 'string',
        'created_on' => 'string',
        'delivered_on' => 'string',
        'id' => 'string',
        'is_transactional' => 'bool',
        'mailing_lists' => '\Swagger\Client\Model\MailingList68[]',
        'name' => 'string',
        'recipients_count' => 'double',
        'scheduled_for' => 'string',
        'scheduled_for_timezone' => 'string',
        'site_name' => 'string',
        'status' => 'double',
        'subject' => 'string',
        'total_bounces' => 'double',
        'total_complaints' => 'double',
        'total_forwards' => 'double',
        'total_link_clicks' => 'double',
        'total_opens' => 'double',
        'total_sent' => 'double',
        'total_unsubscribes' => 'double',
        'unique_forwards' => 'double',
        'unique_link_clicks' => 'double',
        'unique_opens' => 'double'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerFormats = [
        'ab_campaign_type' => 'double',
        'ab_hours_to_test' => 'double',
        'ab_winner' => 'double',
        'ab_winner_selection_type' => 'double',
        'confirmation_to' => null,
        'created_on' => null,
        'delivered_on' => null,
        'id' => null,
        'is_transactional' => null,
        'mailing_lists' => null,
        'name' => null,
        'recipients_count' => 'double',
        'scheduled_for' => null,
        'scheduled_for_timezone' => null,
        'site_name' => null,
        'status' => 'double',
        'subject' => null,
        'total_bounces' => 'double',
        'total_complaints' => 'double',
        'total_forwards' => 'double',
        'total_link_clicks' => 'double',
        'total_opens' => 'double',
        'total_sent' => 'double',
        'total_unsubscribes' => 'double',
        'unique_forwards' => 'double',
        'unique_link_clicks' => 'double',
        'unique_opens' => 'double'
    ];

    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name, and the value is the original name
     * @var string[]
     */
    protected static $attributeMap = [
        'ab_campaign_type' => 'ABCampaignType',
        'ab_hours_to_test' => 'ABHoursToTest',
        'ab_winner' => 'ABWinner',
        'ab_winner_selection_type' => 'ABWinnerSelectionType',
        'confirmation_to' => 'ConfirmationTo',
        'created_on' => 'CreatedOn',
        'delivered_on' => 'DeliveredOn',
        'id' => 'ID',
        'is_transactional' => 'IsTransactional',
        'mailing_lists' => 'MailingLists',
        'name' => 'Name',
        'recipients_count' => 'RecipientsCount',
        'scheduled_for' => 'ScheduledFor',
        'scheduled_for_timezone' => 'ScheduledForTimezone',
        'site_name' => 'SiteName',
        'status' => 'Status',
        'subject' => 'Subject',
        'total_bounces' => 'TotalBounces',
        'total_complaints' => 'TotalComplaints',
        'total_forwards' => 'TotalForwards',
        'total_link_clicks' => 'TotalLinkClicks',
        'total_opens' => 'TotalOpens',
        'total_sent' => 'TotalSent',
        'total_unsubscribes' => 'TotalUnsubscribes',
        'unique_forwards' => 'UniqueForwards',
        'unique_link_clicks' => 'UniqueLinkClicks',
        'unique_opens' => 'UniqueOpens'
    ];


    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @var string[]
     */
    protected static $setters = [
        'ab_campaign_type' => 'setAbCampaignType',
        'ab_hours_to_test' => 'setAbHoursToTest',
        'ab_winner' => 'setAbWinner',
        'ab_winner_selection_type' => 'setAbWinnerSelectionType',
        'confirmation_to' => 'setConfirmationTo',
        'created_on' => 'setCreatedOn',
        'delivered_on' => 'setDeliveredOn',
        'id' => 'setId',
        'is_transactional' => 'setIsTransactional',
        'mailing_lists' => 'setMailingLists',
        'name' => 'setName',
        'recipients_count' => 'setRecipientsCount',
        'scheduled_for' => 'setScheduledFor',
        'scheduled_for_timezone' => 'setScheduledForTimezone',
        'site_name' => 'setSiteName',
        'status' => 'setStatus',
        'subject' => 'setSubject',
        'total_bounces' => 'setTotalBounces',
        'total_complaints' => 'setTotalComplaints',
        'total_forwards' => 'setTotalForwards',
        'total_link_clicks' => 'setTotalLinkClicks',
        'total_opens' => 'setTotalOpens',
        'total_sent' => 'setTotalSent',
        'total_unsubscribes' => 'setTotalUnsubscribes',
        'unique_forwards' => 'setUniqueForwards',
        'unique_link_clicks' => 'setUniqueLinkClicks',
        'unique_opens' => 'setUniqueOpens'
    ];


    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @var string[]
     */
    protected static $getters = [
        'ab_campaign_type' => 'getAbCampaignType',
        'ab_hours_to_test' => 'getAbHoursToTest',
        'ab_winner' => 'getAbWinner',
        'ab_winner_selection_type' => 'getAbWinnerSelectionType',
        'confirmation_to' => 'getConfirmationTo',
        'created_on' => 'getCreatedOn',
        'delivered_on' => 'getDeliveredOn',
        'id' => 'getId',
        'is_transactional' => 'getIsTransactional',
        'mailing_lists' => 'getMailingLists',
        'name' => 'getName',
        'recipients_count' => 'getRecipientsCount',
        'scheduled_for' => 'getScheduledFor',
        'scheduled_for_timezone' => 'getScheduledForTimezone',
        'site_name' => 'getSiteName',
        'status' => 'getStatus',
        'subject' => 'getSubject',
        'total_bounces' => 'getTotalBounces',
        'total_complaints' => 'getTotalComplaints',
        'total_forwards' => 'getTotalForwards',
        'total_link_clicks' => 'getTotalLinkClicks',
        'total_opens' => 'getTotalOpens',
        'total_sent' => 'getTotalSent',
        'total_unsubscribes' => 'getTotalUnsubscribes',
        'unique_forwards' => 'getUniqueForwards',
        'unique_link_clicks' => 'getUniqueLinkClicks',
        'unique_opens' => 'getUniqueOpens'
    ];

    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    public static function setters()
    {
        return self::$setters;
    }

    public static function getters()
    {
        return self::$getters;
    }

    

    

    /**
     * Associative array for storing property values
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['ab_campaign_type'] = isset($data['ab_campaign_type']) ? $data['ab_campaign_type'] : null;
        $this->container['ab_hours_to_test'] = isset($data['ab_hours_to_test']) ? $data['ab_hours_to_test'] : null;
        $this->container['ab_winner'] = isset($data['ab_winner']) ? $data['ab_winner'] : null;
        $this->container['ab_winner_selection_type'] = isset($data['ab_winner_selection_type']) ? $data['ab_winner_selection_type'] : null;
        $this->container['confirmation_to'] = isset($data['confirmation_to']) ? $data['confirmation_to'] : null;
        $this->container['created_on'] = isset($data['created_on']) ? $data['created_on'] : null;
        $this->container['delivered_on'] = isset($data['delivered_on']) ? $data['delivered_on'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['is_transactional'] = isset($data['is_transactional']) ? $data['is_transactional'] : null;
        $this->container['mailing_lists'] = isset($data['mailing_lists']) ? $data['mailing_lists'] : null;
        $this->container['name'] = isset($data['name']) ? $data['name'] : null;
        $this->container['recipients_count'] = isset($data['recipients_count']) ? $data['recipients_count'] : null;
        $this->container['scheduled_for'] = isset($data['scheduled_for']) ? $data['scheduled_for'] : null;
        $this->container['scheduled_for_timezone'] = isset($data['scheduled_for_timezone']) ? $data['scheduled_for_timezone'] : null;
        $this->container['site_name'] = isset($data['site_name']) ? $data['site_name'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['subject'] = isset($data['subject']) ? $data['subject'] : null;
        $this->container['total_bounces'] = isset($data['total_bounces']) ? $data['total_bounces'] : null;
        $this->container['total_complaints'] = isset($data['total_complaints']) ? $data['total_complaints'] : null;
        $this->container['total_forwards'] = isset($data['total_forwards']) ? $data['total_forwards'] : null;
        $this->container['total_link_clicks'] = isset($data['total_link_clicks']) ? $data['total_link_clicks'] : null;
        $this->container['total_opens'] = isset($data['total_opens']) ? $data['total_opens'] : null;
        $this->container['total_sent'] = isset($data['total_sent']) ? $data['total_sent'] : null;
        $this->container['total_unsubscribes'] = isset($data['total_unsubscribes']) ? $data['total_unsubscribes'] : null;
        $this->container['unique_forwards'] = isset($data['unique_forwards']) ? $data['unique_forwards'] : null;
        $this->container['unique_link_clicks'] = isset($data['unique_link_clicks']) ? $data['unique_link_clicks'] : null;
        $this->container['unique_opens'] = isset($data['unique_opens']) ? $data['unique_opens'] : null;
    }

    /**
     * show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalid_properties = [];

        return $invalid_properties;
    }

    /**
     * validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {

        return true;
    }


    /**
     * Gets ab_campaign_type
     * @return double
     */
    public function getAbCampaignType()
    {
        return $this->container['ab_campaign_type'];
    }

    /**
     * Sets ab_campaign_type
     * @param double $ab_campaign_type 
     * @return $this
     */
    public function setAbCampaignType($ab_campaign_type)
    {
        $this->container['ab_campaign_type'] = $ab_campaign_type;

        return $this;
    }

    /**
     * Gets ab_hours_to_test
     * @return double
     */
    public function getAbHoursToTest()
    {
        return $this->container['ab_hours_to_test'];
    }

    /**
     * Sets ab_hours_to_test
     * @param double $ab_hours_to_test 
     * @return $this
     */
    public function setAbHoursToTest($ab_hours_to_test)
    {
        $this->container['ab_hours_to_test'] = $ab_hours_to_test;

        return $this;
    }

    /**
     * Gets ab_winner
     * @return double
     */
    public function getAbWinner()
    {
        return $this->container['ab_winner'];
    }

    /**
     * Sets ab_winner
     * @param double $ab_winner 
     * @return $this
     */
    public function setAbWinner($ab_winner)
    {
        $this->container['ab_winner'] = $ab_winner;

        return $this;
    }

    /**
     * Gets ab_winner_selection_type
     * @return double
     */
    public function getAbWinnerSelectionType()
    {
        return $this->container['ab_winner_selection_type'];
    }

    /**
     * Sets ab_winner_selection_type
     * @param double $ab_winner_selection_type 
     * @return $this
     */
    public function setAbWinnerSelectionType($ab_winner_selection_type)
    {
        $this->container['ab_winner_selection_type'] = $ab_winner_selection_type;

        return $this;
    }

    /**
     * Gets confirmation_to
     * @return string
     */
    public function getConfirmationTo()
    {
        return $this->container['confirmation_to'];
    }

    /**
     * Sets confirmation_to
     * @param string $confirmation_to 
     * @return $this
     */
    public function setConfirmationTo($confirmation_to)
    {
        $this->container['confirmation_to'] = $confirmation_to;

        return $this;
    }

    /**
     * Gets created_on
     * @return string
     */
    public function getCreatedOn()
    {
        return $this->container['created_on'];
    }

    /**
     * Sets created_on
     * @param string $created_on 
     * @return $this
     */
    public function setCreatedOn($created_on)
    {
        $this->container['created_on'] = $created_on;

        return $this;
    }

    /**
     * Gets delivered_on
     * @return string
     */
    public function getDeliveredOn()
    {
        return $this->container['delivered_on'];
    }

    /**
     * Sets delivered_on
     * @param string $delivered_on 
     * @return $this
     */
    public function setDeliveredOn($delivered_on)
    {
        $this->container['delivered_on'] = $delivered_on;

        return $this;
    }

    /**
     * Gets id
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     * @param string $id 
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets is_transactional
     * @return bool
     */
    public function getIsTransactional()
    {
        return $this->container['is_transactional'];
    }

    /**
     * Sets is_transactional
     * @param bool $is_transactional 
     * @return $this
     */
    public function setIsTransactional($is_transactional)
    {
        $this->container['is_transactional'] = $is_transactional;

        return $this;
    }

    /**
     * Gets mailing_lists
     * @return \Swagger\Client\Model\MailingList68[]
     */
    public function getMailingLists()
    {
        return $this->container['mailing_lists'];
    }

    /**
     * Sets mailing_lists
     * @param \Swagger\Client\Model\MailingList68[] $mailing_lists 
     * @return $this
     */
    public function setMailingLists($mailing_lists)
    {
        $this->container['mailing_lists'] = $mailing_lists;

        return $this;
    }

    /**
     * Gets name
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     * @param string $name 
     * @return $this
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets recipients_count
     * @return double
     */
    public function getRecipientsCount()
    {
        return $this->container['recipients_count'];
    }

    /**
     * Sets recipients_count
     * @param double $recipients_count 
     * @return $this
     */
    public function setRecipientsCount($recipients_count)
    {
        $this->container['recipients_count'] = $recipients_count;

        return $this;
    }

    /**
     * Gets scheduled_for
     * @return string
     */
    public function getScheduledFor()
    {
        return $this->container['scheduled_for'];
    }

    /**
     * Sets scheduled_for
     * @param string $scheduled_for 
     * @return $this
     */
    public function setScheduledFor($scheduled_for)
    {
        $this->container['scheduled_for'] = $scheduled_for;

        return $this;
    }

    /**
     * Gets scheduled_for_timezone
     * @return string
     */
    public function getScheduledForTimezone()
    {
        return $this->container['scheduled_for_timezone'];
    }

    /**
     * Sets scheduled_for_timezone
     * @param string $scheduled_for_timezone 
     * @return $this
     */
    public function setScheduledForTimezone($scheduled_for_timezone)
    {
        $this->container['scheduled_for_timezone'] = $scheduled_for_timezone;

        return $this;
    }

    /**
     * Gets site_name
     * @return string
     */
    public function getSiteName()
    {
        return $this->container['site_name'];
    }

    /**
     * Sets site_name
     * @param string $site_name 
     * @return $this
     */
    public function setSiteName($site_name)
    {
        $this->container['site_name'] = $site_name;

        return $this;
    }

    /**
     * Gets status
     * @return double
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     * @param double $status 
     * @return $this
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets subject
     * @return string
     */
    public function getSubject()
    {
        return $this->container['subject'];
    }

    /**
     * Sets subject
     * @param string $subject 
     * @return $this
     */
    public function setSubject($subject)
    {
        $this->container['subject'] = $subject;

        return $this;
    }

    /**
     * Gets total_bounces
     * @return double
     */
    public function getTotalBounces()
    {
        return $this->container['total_bounces'];
    }

    /**
     * Sets total_bounces
     * @param double $total_bounces 
     * @return $this
     */
    public function setTotalBounces($total_bounces)
    {
        $this->container['total_bounces'] = $total_bounces;

        return $this;
    }

    /**
     * Gets total_complaints
     * @return double
     */
    public function getTotalComplaints()
    {
        return $this->container['total_complaints'];
    }

    /**
     * Sets total_complaints
     * @param double $total_complaints 
     * @return $this
     */
    public function setTotalComplaints($total_complaints)
    {
        $this->container['total_complaints'] = $total_complaints;

        return $this;
    }

    /**
     * Gets total_forwards
     * @return double
     */
    public function getTotalForwards()
    {
        return $this->container['total_forwards'];
    }

    /**
     * Sets total_forwards
     * @param double $total_forwards 
     * @return $this
     */
    public function setTotalForwards($total_forwards)
    {
        $this->container['total_forwards'] = $total_forwards;

        return $this;
    }

    /**
     * Gets total_link_clicks
     * @return double
     */
    public function getTotalLinkClicks()
    {
        return $this->container['total_link_clicks'];
    }

    /**
     * Sets total_link_clicks
     * @param double $total_link_clicks 
     * @return $this
     */
    public function setTotalLinkClicks($total_link_clicks)
    {
        $this->container['total_link_clicks'] = $total_link_clicks;

        return $this;
    }

    /**
     * Gets total_opens
     * @return double
     */
    public function getTotalOpens()
    {
        return $this->container['total_opens'];
    }

    /**
     * Sets total_opens
     * @param double $total_opens 
     * @return $this
     */
    public function setTotalOpens($total_opens)
    {
        $this->container['total_opens'] = $total_opens;

        return $this;
    }

    /**
     * Gets total_sent
     * @return double
     */
    public function getTotalSent()
    {
        return $this->container['total_sent'];
    }

    /**
     * Sets total_sent
     * @param double $total_sent 
     * @return $this
     */
    public function setTotalSent($total_sent)
    {
        $this->container['total_sent'] = $total_sent;

        return $this;
    }

    /**
     * Gets total_unsubscribes
     * @return double
     */
    public function getTotalUnsubscribes()
    {
        return $this->container['total_unsubscribes'];
    }

    /**
     * Sets total_unsubscribes
     * @param double $total_unsubscribes 
     * @return $this
     */
    public function setTotalUnsubscribes($total_unsubscribes)
    {
        $this->container['total_unsubscribes'] = $total_unsubscribes;

        return $this;
    }

    /**
     * Gets unique_forwards
     * @return double
     */
    public function getUniqueForwards()
    {
        return $this->container['unique_forwards'];
    }

    /**
     * Sets unique_forwards
     * @param double $unique_forwards 
     * @return $this
     */
    public function setUniqueForwards($unique_forwards)
    {
        $this->container['unique_forwards'] = $unique_forwards;

        return $this;
    }

    /**
     * Gets unique_link_clicks
     * @return double
     */
    public function getUniqueLinkClicks()
    {
        return $this->container['unique_link_clicks'];
    }

    /**
     * Sets unique_link_clicks
     * @param double $unique_link_clicks 
     * @return $this
     */
    public function setUniqueLinkClicks($unique_link_clicks)
    {
        $this->container['unique_link_clicks'] = $unique_link_clicks;

        return $this;
    }

    /**
     * Gets unique_opens
     * @return double
     */
    public function getUniqueOpens()
    {
        return $this->container['unique_opens'];
    }

    /**
     * Sets unique_opens
     * @param double $unique_opens 
     * @return $this
     */
    public function setUniqueOpens($unique_opens)
    {
        $this->container['unique_opens'] = $unique_opens;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     * @param  integer $offset Offset
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     * @param  integer $offset Offset
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     * @param  integer $offset Offset
     * @param  mixed   $value  Value to be set
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     * @param  integer $offset Offset
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(\Swagger\Client\ObjectSerializer::sanitizeForSerialization($this), JSON_PRETTY_PRINT);
        }

        return json_encode(\Swagger\Client\ObjectSerializer::sanitizeForSerialization($this));
    }
}


