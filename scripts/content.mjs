export const sources = {
  roof: { label: 'Texas Department of Insurance: Insurance and your roof', url: 'https://www.tdi.texas.gov/tips/replacing-your-roof.html' },
  storm: { label: 'Texas Department of Insurance: After hail or windstorms', url: 'https://www.tdi.texas.gov/tips/after-hail-or-windstorms.html' },
  law: { label: 'Texas Department of Insurance: Roofing and insurance law', url: 'https://www.tdi.texas.gov/consumer/storms/roofing-and-insurance-know-the-law.html' },
  claims: { label: 'Texas Department of Insurance: Home insurance guide', url: 'https://www.tdi.texas.gov/pubs/consumer/cb025.html' },
  dallas: { label: 'City of Dallas: Single family permit guidance', url: 'https://dallascityhall.com/tornado/Pages/Single-Family.aspx' },
  climate: { label: 'National Weather Service: DFW climate narrative', url: 'https://www.weather.gov/fwd/dfw_narrative' },
  scams: { label: 'Texas Department of Insurance: Avoiding contractor scams', url: 'https://www.tdi.texas.gov/tips/contractor-scams.html' }
};

// Individual page copy, not a city-name substitution or generated FAQ farm.
export const pages = [
  {
    slug:'roof-replacement-dallas', type:'guide', group:'Replacement', title:'Roof Replacement in Dallas, TX: Costs, Quotes & Local Roofing Options', description:'Understand Dallas roof replacement scope, cost factors, permits, storm claims and how to compare written roofing quotes.',
    answer:'A Dallas roof replacement starts with an inspection and a written scope: roofing area, tear-off, decking, underlayment, ventilation, flashing and the proposed material. Compare bids on those details before comparing totals. City of Dallas guidance says replacing large areas or an entire roof requires a re-roof permit. A contractor should confirm the rules for your address.',
    sections:[
      ['What actually changes the quote?', 'Roof area is different from the home’s floor area. Pitch, stories, access, tear-off layers, damaged decking, penetrations and selected materials change the labor and material scope. A low bid can leave out line items that another contractor included.'],
      ['Repair or full replacement?', 'An isolated leak or missing shingle does not automatically require a whole new roof. Ask an inspector to show where damage is, how much of the roof is affected and whether a repair would leave a sound, warrantable system. See our repair-versus-replacement guide.'],
      ['Storms, insurance and local permits', 'North Texas experiences severe weather, but a storm in the metro area does not prove damage at your home. Document what you can safely see from the ground. Check your policy and deductible with your insurer; coverage depends on its terms and assessment. For a Dallas address, clarify the re-roof permit and who obtains it.'],
      ['Compare like-for-like bids', 'Request itemized written estimates specifying shingle or system, underlayment, flashing, ventilation, decking allowance, removal, disposal, permit responsibility, schedule, payment milestones and workmanship warranty. Verify the business and ask for recent local references before signing.']
    ], related:['roof-replacement-cost-dallas','roof-repair-vs-replacement','roof-cost-calculator','get-quotes'], refs:['dallas','climate','roof','scams']
  },
  {
    slug:'roof-replacement-cost-dallas', type:'guide', group:'Cost', title:'Roof Replacement Cost in Dallas: How to Build a Realistic Budget', description:'A Dallas roof cost guide built around actual bid scope, material choices, hidden costs and transparent pricing limitations.',
    answer:'There is no defensible single price for a Dallas replacement without the roof measurements, material and condition. We do not yet have a verified local quote dataset and therefore do not publish a city average. For a usable budget, obtain itemized on-site bids for the same work and compare both their totals and exclusions.',
    sections:[
      ['Price drivers to ask about', 'Ask each contractor to measure roof area, identify pitch and story height, specify tear-off and disposal, describe underlayment and flashing, and explain how hidden decking repairs will be authorized. Material, access, ventilation and permit handling belong in the same comparison.'],
      ['A scope table to compare', 'Put the exact roof area, system and product, decking allowance, ventilation plan, flashing, labor, removal, disposal, permit and warranty on one sheet for each bid. A quoted total alone cannot show whether the offers are comparable.'],
      ['Insurance is a separate calculation', 'An insurer’s allowed amount is not automatically the contractor’s estimate. Check whether your policy pays replacement cost or actual cash value, what deductible applies, and whether exclusions or depreciation affect payment. Do not assume a claim will cover the whole replacement.'],
      ['Our cost data standard', 'We will publish Dallas dollar ranges only after collecting genuine, dated, comparable local estimates with roof area, material and job scope. Until then, the calculator prepares a project brief and summarizes real quotes you enter yourself.']
    ], related:['how-we-research-costs','roof-cost-calculator','new-roof-cost-dallas','get-quotes'], refs:['roof','claims']
  },
  {
    slug:'new-roof-cost-dallas', type:'guide', group:'Cost', title:'New Roof Cost in Dallas: What Your Estimate Should Include', description:'Learn what to check in a Dallas new-roof bid, including tear-off, roof area, decking, flashing, permits and warranty.',
    answer:'For an existing Dallas home, “new roof cost” usually means the installed replacement system, not only the price of shingles. Before accepting a bid, confirm measured roof area, removal, underlayment, flashing, ventilation, unexpected decking work, disposal, local permit responsibility and warranty. The only reliable figure for your property comes from a scoped local estimate.',
    sections:[
      ['Roof area versus house size', 'A home’s interior square footage is not a measured roof area. Overhangs, roof shape and slope affect the surface to be covered. Ask for the actual measurement method used on the estimate.'],
      ['Watch the exclusions', 'Some estimates include damaged decking only as a unit price discovered after tear-off. Ask for photos, approval before extra work and the charge per unit. Confirm the number of layers removed and who pays for disposal.'],
      ['Check the final total', 'Compare payment milestones, permit handling, tax assumptions where applicable and what triggers a change order. Request final documentation and warranty terms in writing.']
    ], related:['roof-replacement-cost-dallas','roof-replacement-estimate','roof-cost-calculator'], refs:['dallas','scams']
  },
  {
    slug:'roof-replacement-estimate', type:'guide', group:'Cost', title:'Roof Replacement Estimate: Compare Dallas Bids Line by Line', description:'A practical checklist for comparing written roof replacement estimates across Dallas-Fort Worth.',
    answer:'Ask for a written scope from each roofer before comparing prices. It should identify measured roof area, materials and system components, removal, decking rules, ventilation, flashing, permit, cleanup, timing, payments and both product and labor warranties. When a line is missing, ask whether it is included, excluded or subject to a change order.',
    sections:[
      ['Measurement and material', 'Confirm the unit of roof area and whether the estimate uses actual roof measurement. Record brand and product type if supplied, underlayment, drip edge, flashing and ventilation details.'],
      ['Changes and documentation', 'Get a written rule for discovering rotten decking or other concealed damage. Ask what evidence will be supplied, what the unit price is and whether work stops for your approval.'],
      ['Contractor checks', 'Verify contact information, insurance and references yourself. Texas Department of Insurance warns against vague contracts tied to insurance proceeds and against offers to waive the deductible.']
    ], related:['roof-replacement-dallas','roof-replacement-checklist','best-roofing-companies-dallas'], refs:['scams','law']
  },
  {
    slug:'roof-repair-vs-replacement', type:'guide', group:'Replacement', title:'Roof Repair vs. Replacement in Dallas: How to Decide', description:'Consider extent of damage, roof condition, leaks and a documented inspection before choosing repair or replacement.',
    answer:'The decision turns on the extent and location of damage, existing roof condition and whether a repair can restore a sound system. An isolated problem may be repairable; widespread failures can support replacement. Ask a qualified roofer to document the findings, show photos, explain alternatives and itemize both options before committing.',
    sections:[
      ['Start with the symptom', 'A leak can travel before it appears indoors. Record when it happens and where water appears, then have a professional trace the entry point. Do not walk a damaged or steep roof yourself.'],
      ['Compare two scopes', 'Request a repair scope explaining materials, affected area and warranty. Request a replacement scope showing system components, tear-off and permit responsibility. Consider repeat repair risk, but do not infer a full replacement from a single stained ceiling.'],
      ['After a storm', 'Document ground-visible damage and protect the interior from further water exposure. Ask the insurer about coverage and deductible if you plan a claim. Wear and tear alone is different from a covered sudden event.']
    ], related:['roof-replacement-dallas','hail-damage-roof-dallas','roof-replacement-cost-dallas'], refs:['roof','storm']
  },
  {
    slug:'roof-replacement-process', type:'guide', group:'Replacement', title:'Dallas Roof Replacement Process: From Inspection to Final Walkthrough', description:'Follow the practical steps from inspection and bids through permit, installation and final documentation.',
    answer:'A typical replacement involves inspecting and measuring, agreeing a written scope, checking permit requirements, scheduling work, removing old material, repairing approved decking, installing the new system and completing a final walkthrough. Exact timing depends on the property, weather, crew, permit and materials; confirm milestones in your contract.',
    sections:[
      ['Before signing', 'Compare itemized bids and get payment, change-order and warranty terms in writing. Discuss how landscaping, attic items and driveways will be protected and where materials will be staged.'],
      ['During installation', 'Ask who is supervising, how unexpected damage will be photographed and approved, and how daily cleanup works. Keep the insurer’s adjustment and contractor scope separate when the job involves a claim.'],
      ['At completion', 'Walk the property, request permit/inspection documentation where required, confirm remaining punch-list items and keep proof of payment, product details and workmanship terms.']
    ], related:['roof-replacement-checklist','roof-replacement-estimate','get-quotes'], refs:['dallas','scams']
  },
  {
    slug:'roof-replacement-checklist', type:'guide', group:'Replacement', title:'Dallas Roof Replacement Checklist for Homeowners', description:'Questions to ask before hiring a roofing contractor, during the project and after installation.',
    answer:'Before hiring, confirm measured roof area, full scope, material, labor and product warranties, permit responsibility, payment schedule, cleanup and how change orders work. During work, document approved changes. After work, verify cleanup, completion items and any required permit or inspection paperwork.',
    sections:[
      ['Before the estimate', 'Collect roof age if known, photos from ground level, leak history and insurance documents if applicable. Do not climb onto a roof to take pictures.'],
      ['Before the contract', 'Compare at least two written scopes where possible. Check business contact details, references and insurance evidence. Do not sign a vague promise to perform all repairs for your insurance proceeds.'],
      ['After installation', 'Keep a copy of final invoice, warranty, product details, photographs, approved changes and inspection record if required. Check interior ceilings after the next significant rain.']
    ], related:['roof-replacement-estimate','roof-replacement-process','best-roofing-companies-dallas'], refs:['scams','dallas']
  },
  {
    slug:'hail-damage', type:'guide', group:'Storm', title:'Hail Damage Roof Guide for Dallas-Fort Worth Homeowners', description:'What to do after hail, how to document possible roof damage and how insurance questions fit into the process.',
    answer:'After a hailstorm, prioritize safety, stop any active interior water damage and document what is visible from the ground. A storm report does not establish roof damage at a particular address. A roofing professional can inspect the roof, while your insurer decides coverage under your own policy and assessment.',
    sections:[
      ['First steps after the storm', 'Photograph visible damage to gutters, vents, windows and siding from safe locations. Note the date and save storm notices. If water is entering, seek appropriate emergency protection and retain receipts.'],
      ['Inspection versus claim', 'A roofer’s inspection documents roof condition and a proposed repair scope. An insurer evaluates coverage and claim amount. Ask each party for its findings in writing, and review your wind and hail deductible.'],
      ['Avoid pressure', 'Do not sign a contract under time pressure or accept an offer to waive an insurance deductible. Compare the scope and investigate the contractor first.']
    ], related:['hail-damage-roof-dallas','roof-hail-damage-inspection','roof-insurance-claim-dallas'], refs:['storm','law','climate']
  },
  {
    slug:'hail-damage-roof-dallas', type:'guide', group:'Storm', title:'Hail Damage to a Dallas Roof: Signs, Inspection and Next Steps', description:'Assess suspected Dallas roof hail damage safely and understand what an inspection can and cannot determine.',
    answer:'Possible hail damage requires a property-specific inspection; hail in the Dallas area is not proof that your roof needs replacement. Photograph safe-to-see exterior signs and any interior leak, record the storm date, and ask a roofer for dated findings. Check your insurance policy and deductible before assuming the loss is covered.',
    sections:[
      ['What you can safely record', 'Note damaged gutters, downspouts, screens, window trim, vents and shingles visible from the ground. A photo is useful context but is not a professional roof diagnosis.'],
      ['Questions for an inspector', 'Which slopes were inspected? What photos show damage rather than ordinary wear? Is repair possible? Are decking or interior issues suspected? Ask for findings and scope in writing.'],
      ['Claim decisions', 'The Texas Department of Insurance explains that coverage and payment depend on the policy, roof condition and deductible. Avoid promises that an inspection guarantees a paid claim.']
    ], related:['roof-hail-damage-inspection','does-insurance-cover-hail-damage','roof-repair-vs-replacement'], refs:['storm','roof']
  },
  {
    slug:'roof-hail-damage-inspection', type:'guide', group:'Storm', title:'Hail Damage Roof Inspection in Dallas: What to Ask', description:'Prepare for a Dallas hail roof inspection and distinguish documented roof findings from insurance decisions.',
    answer:'A hail roof inspection should identify which roof surfaces were examined, show dated photos and describe specific findings and repair or replacement options. The inspecting roofer does not decide what the insurer will cover. Avoid climbing the roof yourself; document visible conditions safely and ask for a written report.',
    sections:[
      ['Before the visit', 'Write down the storm date if known, leak locations, roof age if known, prior repairs and any immediate water protection. Gather safe ground-level photos.'],
      ['During the review', 'Ask the inspector to distinguish suspected storm impact from age and wear, note inaccessible areas and explain whether localized repairs are technically workable.'],
      ['After the inspection', 'Keep the report and photos. If you pursue an insurance claim, contact your insurer to understand the adjustment process, deductible and next steps.']
    ], related:['storm-assessment','hail-damage-roof-dallas','roof-insurance-claim-dallas'], refs:['storm','roof']
  },
  {
    slug:'roof-insurance-claim-dallas', type:'guide', group:'Insurance', title:'Roof Insurance Claim in Dallas: Coverage, Deductibles and Documentation', description:'Learn the difference between a roofer’s scope and an insurer’s coverage decision for a Dallas roof claim.',
    answer:'For roof damage, document the event and contact your insurer to review policy coverage, deductible and claim steps. The insurer evaluates the loss under the policy; a roofing estimate describes proposed work. Coverage can differ for hail, wind, age-related deterioration and the type of roof settlement. Do not assume a contractor can promise approval.',
    sections:[
      ['Check the policy first', 'Ask whether wind and hail are included, whether they have a separate deductible and whether roof settlement is replacement cost or actual cash value. Your declarations and endorsements control, subject to the insurer’s assessment.'],
      ['Keep records', 'Save dated photos, storm date, temporary protection receipts, inspection notes, estimates and insurer correspondence. Ask about deadlines that apply to your own policy and circumstances.'],
      ['Know the roles', 'Texas Department of Insurance explains that roofers doing the work cannot also act as your public insurance adjuster on that claim. A contractor should not offer to waive your deductible.']
    ], related:['does-insurance-cover-hail-damage','roof-replacement-cost-dallas','roof-hail-damage-inspection'], refs:['roof','claims','law']
  },
  {
    slug:'does-insurance-cover-hail-damage', type:'guide', group:'Insurance', title:'Does Homeowners Insurance Cover Roof Hail Damage in Texas?', description:'Understand why hail coverage depends on the policy, exclusions, deductible and insurer’s damage assessment.',
    answer:'A Texas homeowners policy may cover roof damage from hail, but the outcome depends on the policy, the cause and extent of damage, exclusions, deductible and insurer assessment. Some policies settle roof damage differently based on age or condition. Read your declarations and endorsements and ask your insurer about your specific property.',
    sections:[
      ['Wind and hail deductible', 'Your wind or hail deductible may differ from other deductibles. Check the dollar amount or percentage and ask how it applies to the proposed claim.'],
      ['Wear and tear', 'The Texas Department of Insurance says insurers do not pay for a new roof simply because it is old or worn out. A storm event and actual damage still need to be evaluated.'],
      ['Payment basis', 'Replacement cost and actual cash value policies can pay differently. Ask whether depreciation is recoverable and what documentation the insurer requires. Do not treat an estimate as a coverage guarantee.']
    ], related:['roof-insurance-claim-dallas','hail-damage-roof-dallas','quote-matching-policy'], refs:['roof','claims']
  },
  {
    slug:'best-roofing-companies-dallas', type:'guide', group:'Compare', title:'Dallas Roofing Company Index: How to Compare Contractors', description:'A transparent comparison framework for Dallas roofers. No paid or unverified Top 10 rankings.',
    answer:'There is no ranked contractor list here yet. We will add company profiles only after verifying service area and the specific fields shown, recording the check date and identifying any sponsored placement. In the meantime, use this framework to compare several written bids and independently verify each business before hiring.',
    sections:[
      ['Verify identity and coverage', 'Confirm the company’s legal/contact identity, DFW service area, insurance evidence, residential replacement work and recent local references. Verify each claim directly with its source.'],
      ['Compare the written work', 'Evaluate identical roof measurements, products, tear-off, decking, ventilation, flashing, permit responsibility, installation plan and warranties. A review score is not a substitute for the contract scope.'],
      ['Avoid misleading rankings', 'Payment never determines an editorial quality rank. If we publish sponsored placements, they will be labeled. We will not publish review counts, certifications or years operating without verification.']
    ], related:['how-we-rate-roofing-companies','roof-replacement-estimate','get-quotes'], refs:['scams','dallas']
  }
];
